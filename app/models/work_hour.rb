class WorkHour < ActiveRecord::Base
	#validates :start_at, :presence => { :message => "Work day start time is required" }
	#validates :end_at, :presence => { :message => "Work day end time is required" }
	validates :day, :presence => { :message => "Work day name is required" }
 	serialize :start_at, Tod::TimeOfDay
 	serialize :end_at, Tod::TimeOfDay

	belongs_to :user
	#start_at - seconds from 0am
	#end_at - seconds from 0am
	#day - the name of the day
	def self.build_work_day(day_name)
		day = WorkHour.new
		day.day = day_name
		day.start_at = Tod::TimeOfDay.new 9
		# the default workhours is full day
		day.end_at = Tod::TimeOfDay.new 18
		day
	end

	def self.build_week
		days = Constant::DAYS.map{|day_name| self.build_work_day(day_name)}
		days[-1].start_at = 0;
		days[-1].end_at = 0;
		days[-2].start_at = 0;
		days[-2].end_at = 0;

		return days
	end

	def short_day_name
		@short_day ||= day[0..2].downcase
	end

	def to_am_show(time_name)
		seconds = self.send("#{time_name}_at")
		
		hour = seconds / 3600.0
		min = (hour % 1) * 60
		"#{hour.floor}:#{min.to_i}"
	end
end
