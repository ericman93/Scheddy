function get_gmt_offset(){var t=new Date;return-t.getTimezoneOffset()/60}function date_to_human(t){return t.format("L")+" "+t.format("L")}