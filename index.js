// DATA
// central bus
var central =
{'Oxford Street @ University Avenue': ['6:47 AM', '7:07 AM', '7:27 AM', '7:47 AM', '8:07 AM', '8:27 AM', '8:47 AM', '9:07 AM', '9:27 AM', '9:47 AM', '10:07 AM', '10:27 AM', '10:47 AM', '4:17 PM', '4:37 PM', '4:57 PM', '5:17 PM', '5:37 PM', '5:57 PM', '6:17 PM', '6:37 PM', '6:57 PM'],

'Downtown Berkeley BART Station: Shattuck Avenue @ Addison Street': ['6:45 AM', '7:05 AM', '7:25 AM', '7:45 AM', '8:05 AM', '8:25 AM', '8:45 AM', '9:05 AM', '9:25 AM', '9:45 AM', '10:05 AM', '10:25 AM', '10:45 AM', '4:15 PM', '4:35 PM', '4:55 PM', '5:15 PM', '5:35 PM', '5:55 PM', '6:15 PM', '6:35 PM', '6:55 PM', '7:15 PM'],

'Cory Hall: Hearst Avenue @ LeRoy Avenue': ['6:52 AM', '7:12 AM', '7:32 AM', '7:52 AM', '8:12 AM', '8:32 AM', '8:52 AM', '9:12 AM', '9:32 AM', '9:52 AM', '10:12 AM', '10:32 AM', '10:52 AM', '4:22 PM', '4:42 PM', '5:02 PM', '5:22 PM', '5:42 PM', '6:02 PM', '6:22 PM', '6:42 PM', '7:02 PM'],

'North Gate Hall: Hearst Avenue @ Euclid Avenue': ['6:51 AM', '7:11 AM', '7:31 AM', '7:51 AM', '8:11 AM', '8:31 AM', '8:51 AM', '9:11 AM', '9:31 AM', '9:51 AM', '10:11 AM', '10:31 AM', '10:51 AM', '4:21 PM', '4:41 PM', '5:01 PM', '5:21 PM', '5:41 PM', '6:01 PM', '6:21 PM', '6:41 PM', '7:01 PM'],

'Evans Hall: Hearst Mining Circle side': ['6:55 AM', '7:15 AM', '7:35 AM', '7:55 AM', '8:15 AM', '8:35 AM', '8:55 AM', '9:15 AM', '9:35 AM', '9:55 AM', '10:15 AM', '10:35 AM', '10:55 AM', '4:25 PM', '4:45 PM', '5:05 PM', '5:25 PM', '5:45 PM', '6:05 PM', '6:25 PM', '6:45 PM', '7:05 PM'],

'Tolman Hall: Hearst Avenue @ Arch Street': ['6:49 AM', '7:09 AM', '7:29 AM', '7:49 AM', '8:09 AM', '8:29 AM', '8:49 AM', '9:09 AM', '9:29 AM', '9:49 AM', '10:09 AM', '10:29 AM', '10:49 AM', '4:19 PM', '4:39 PM', '4:59 PM', '5:19 PM', '5:39 PM', '5:59 PM', '6:19 PM', '6:39 PM', '6:59 PM'],

'Li Ka Shing Center: West Crescent Side': ['7:02 AM', '7:22 AM', '7:42 AM', '8:02 AM', '8:22 AM', '8:42 AM', '9:02 AM', '9:22 AM', '9:42 AM', '10:02 AM', '10:22 AM', '10:42 AM', '11:02 AM', '4:32 PM', '4:52 PM', '5:12 PM', '5:32 PM', '5:52 PM', '6:12 PM', '6:32 PM', '6:52 PM', '7:12 PM'],

'Moffitt Library: University Drive': ['6:58 AM','7:18 AM','7:38 AM','7:58 AM','8:18 AM','8:38 AM','8:58 AM','9:18 AM','9:38 AM','9:58 AM','10:18 AM','10:38 AM','10:58 AM','4:28 PM','4:48 PM','5:08 PM','5:28 PM','5:48 PM','6:08 PM','6:28 PM','6:48 PM','7:08 PM'],

'West Circle: University Drive Side': ['7:00 AM', '7:20 AM', '7:40 AM', '8:00 AM', '8:20 AM', '8:40 AM', '9:00 AM', '9:20 AM', '9:40 AM', '10:00 AM', '10:20 AM', '10:40 AM', '11:00 AM', '4:30 PM', '4:50 PM', '5:10 PM', '5:30 PM', '5:50 PM', '6:10 PM', '6:30 PM', '6:50 PM', '7:10 PM']
};

var perimeter =
{'Oxford Street @ University Avenue': ['7:02 AM', '7:32 AM', '8:02 AM', '8:32 AM', '9:02 AM', '9:32 AM', '10:02 AM', '10:32 AM', '11:02 AM', '11:32 AM', '12:02 PM', '12:32 PM', '1:02 PM', '1:32 PM', '2:02 PM', '2:32 PM', '3:02 PM', '3:32 PM', '4:02 PM', '4:32 PM', '5:02 PM', '5:32 PM', '6:02 PM', '6:32 PM', '7:02 PM'],

'Downtown Berkeley BART Station: Shattuck Avenue @ Addison Street': ['7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM'],

'Cory Hall: Hearst Avenue @ LeRoy Avenue': ['7:06 AM', '7:36 AM', '8:06 AM', '8:36 AM', '9:06 AM', '9:36 AM', '10:06 AM', '10:36 AM', '11:06 AM', '11:36 AM', '12:06 PM', '12:36 PM', '1:06 PM', '1:36 PM', '2:06 PM', '2:36 PM', '3:06 PM', '3:36 PM', '4:06 PM', '4:36 PM', '5:06 PM', '5:36 PM', '6:06 PM', '6:36 PM', '7:06 PM'],

'North Gate Hall: Hearst Avenue @ Euclid Avenue': ['7:05 AM', '7:35 AM', '8:05 AM', '8:35 AM', '9:05 AM', '9:35 AM', '10:05 AM', '10:35 AM', '11:05 AM', '11:35 AM', '12:05 PM', '12:35 PM', '1:05 PM', '1:35 PM', '2:05 PM', '2:35 PM', '3:05 PM', '3:35 PM', '4:05 PM', '4:35 PM', '5:05 PM', '5:35 PM', '6:05 PM', '6:35 PM', '7:05 PM'],

'Evans Hall: Hearst Mining Circle side': ['7:08 AM', '7:38 AM', '8:08 AM', '8:38 AM', '9:08 AM', '9:38 AM', '10:08 AM', '10:38 AM', '11:08 AM', '11:38 AM', '12:08 PM', '12:38 PM', '1:08 PM', '1:38 PM', '2:08 PM', '2:38 PM', '3:08 PM', '3:38 PM', '4:08 PM', '4:38 PM', '5:08 PM', '5:38 PM', '6:08 PM', '6:38 PM', '7:08 PM'],

'Tolman Hall: Hearst Avenue @ Arch Street': ['7:04 AM', '7:34 AM', '8:04 AM', '8:34 AM', '9:04 AM', '9:34 AM', '10:04 AM', '10:34 AM', '11:04 AM', '11:34 AM', '12:04 PM', '12:34 PM', '1:04 PM', '1:34 PM', '2:04 PM', '2:34 PM', '3:04 PM', '3:34 PM', '4:04 PM', '4:34 PM', '5:04 PM', '5:34 PM', '6:04 PM', '6:34 PM', '7:04 PM'],

'Gayley @ Stadium Rimway': ['7:10 AM', '7:40 AM', '8:10 AM', '8:40 AM', '9:10 AM', '9:40 AM', '10:10 AM', '10:40 AM', '11:10 AM', '11:40 AM', '12:10 PM', '12:40 PM', '1:10 PM', '1:40 PM', '2:10 PM', '2:40 PM', '3:10 PM', '3:40 PM', '4:10 PM', '4:40 PM', '5:10 PM', '5:40 PM', '6:10 PM', '6:40 PM', '7:10 PM'],

'Haas School of Business: Piedmont Avenue Side': ['7:11 AM', '7:41 AM', '8:11 AM', '8:41 AM', '9:11 AM', '9:41 AM', '10:11 AM', '10:41 AM', '11:11 AM', '11:41 AM', '12:11 PM', '12:41 PM', '1:11 PM', '1:41 PM', '2:11 PM', '2:41 PM', '3:11 PM', '3:41 PM', '4:11 PM', '4:41 PM', '5:11 PM', '5:41 PM', '6:11 PM', '6:41 PM', '7:11 PM'],

'International House: Piedmont Avenue @ Bancroft Way': ['7:12 AM', '7:42 AM', '8:12 AM', '8:42 AM', '9:12 AM', '9:42 AM', '10:12 AM', '10:42 AM', '11:12 AM', '11:42 AM', '12:12 PM', '12:42 PM', '1:12 PM', '1:42 PM', '2:12 PM', '2:42 PM', '3:12 PM', '3:42 PM', '4:12 PM', '4:42 PM', '5:12 PM', '5:42 PM', '6:12 PM', '6:42 PM', '7:12 PM'],

'Hearst Memorial Gym: Bancroft Way @ Bowditch Street': ['7:21 AM', '7:51 AM', '8:21 AM', '8:51 AM', '9:21 AM', '9:51 AM', '10:21 AM', '10:51 AM', '11:21 AM', '11:51 AM', '12:21 PM', '12:51 PM', '1:21 PM', '1:51 PM', '2:21 PM', '2:51 PM', '3:21 PM', '3:51 PM', '4:21 PM', '4:51 PM', '5:21 PM', '5:51 PM', '6:21 PM', '6:51 PM', '7:21 PM'],

'Kroeber Hall: Bancroft Way @ College Avenue': ['7:20 AM', '7:50 AM', '8:20 AM', '8:50 AM', '9:20 AM', '9:50 AM', '10:20 AM', '10:50 AM', '11:20 AM', '11:50 AM', '12:20 PM', '12:50 PM', '1:20 PM', '1:50 PM', '2:20 PM', '2:50 PM', '3:20 PM', '3:50 PM', '4:20 PM', '4:50 PM', '5:20 PM', '5:50 PM', '6:20 PM', '6:50 PM', '7:20 PM'],

'RSF: Bancroft Way @ Ellsworth Street': ['7:25 AM', '7:55 AM', '8:25 AM', '8:55 AM', '9:25 AM', '9:55 AM', '10:25 AM', '10:55 AM', '11:25 AM', '11:55 AM', '12:25 PM', '12:55 PM', '1:25 PM', '1:55 PM', '2:25 PM', '2:55 PM', '3:25 PM', '3:55 PM', '4:25 PM', '4:55 PM', '5:25 PM', '5:55 PM', '6:25 PM', '6:55 PM', '7:25 PM'],

'Shattuck Avenue @ Kittredge Street': ['7:28 AM', '7:58 AM', '8:28 AM', '8:58 AM', '9:28 AM', '9:58 AM', '10:28 AM', '10:58 AM', '11:28 AM', '11:58 AM', '12:28 PM', '12:58 PM', '1:28 PM', '1:58 PM', '2:28 PM', '2:58 PM', '3:28 PM', '3:58 PM', '4:28 PM', '4:58 PM', '5:28 PM', '5:58 PM', '6:28 PM', '6:58 PM', '7:28 PM'],

'Banway Building: Bancroft Way @ Shattuck Avenue': ['7:27 AM', '7:57 AM', '8:27 AM', '8:57 AM', '9:27 AM', '9:57 AM', '10:27 AM', '10:57 AM', '11:27 AM', '11:57 AM', '12:27 PM', '12:57 PM', '1:27 PM', '1:57 PM', '2:27 PM', '2:57 PM', '3:27 PM', '3:57 PM', '4:27 PM', '4:57 PM', '5:27 PM', '5:57 PM', '6:27 PM', '6:57 PM', '7:27 PM'],

'College Avenue @ Haste Street': ['7:18 AM', '7:48 AM', '8:18 AM', '8:48 AM', '9:18 AM', '9:48 AM', '10:18 AM', '10:48 AM', '11:18 AM', '11:48 AM', '12:18 PM', '12:48 PM', '1:18 PM', '1:48 PM', '2:18 PM', '2:48 PM', '3:18 PM', '3:48 PM', '4:18 PM', '4:48 PM', '5:18 PM', '5:48 PM', '6:18 PM', '6:48 PM', '7:18 PM'],

'Sproul Hall: Bancroft Way @ Barrow Lane': ['7:23 AM', '7:53 AM', '8:23 AM', '8:53 AM', '9:23 AM', '9:53 AM', '10:23 AM', '10:53 AM', '11:23 AM', '11:53 AM', '12:23 PM', '12:53 PM', '1:23 PM', '1:53 PM', '2:23 PM', '2:53 PM', '3:23 PM', '3:53 PM', '4:23 PM', '4:53 PM', '5:23 PM', '5:53 PM', '6:23 PM', '6:53 PM', '7:23 PM'],

'Piedmont Avenue @ Channing Way': ['7:14 AM', '7:44 AM', '8:14 AM', '8:44 AM', '9:14 AM', '9:44 AM', '10:14 AM', '10:44 AM', '11:14 AM', '11:44 AM', '12:14 PM', '12:44 PM', '1:14 PM', '1:44 PM', '2:14 PM', '2:44 PM', '3:14 PM', '3:44 PM', '4:14 PM', '4:44 PM', '5:14 PM', '5:44 PM', '6:14 PM', '6:44 PM', '7:14 PM']

};

// Copyright (c) 2015 Angus H. (4148)
// Distributed under the GNU General Public License v3.0 (GPLv3).

// array of bus times
var buses = {'Central Campus': central, 'Perimeter Line': perimeter};

for (var bus in buses) {
	if (!buses.hasOwnProperty(bus)) {
		continue;
	}

	for (var stop in buses[bus]) {
		if (!buses[bus].hasOwnProperty(stop)) {
			continue;
		}
		var num_times = buses[bus][stop].length;
		for (var i = 0; i < num_times; i++) {
			buses[bus][stop][i] = convertTime(buses[bus][stop][i].trim());
		}
	}
}

// BUS_STOP: bus stop bus stops at; TIME: supplied time
// returns an array with the next available bus and its time of arrival
function findBus(stop, time) {
	var cur_match = null;
	for (var bus in buses) {
		if (!buses.hasOwnProperty(bus)) {
			continue;
		}

		if (!buses[bus][stop]) { continue; } // does not have bus stop
		// converts times initially, then compares
		var num_times = buses[bus][stop].length;
		for (var i = 0; i < num_times; i++) {
			if (timeLTE(time, buses[bus][stop][i])) {
				if (cur_match == null) {
					cur_match = [buses[bus][stop][i], bus, stop];
				} else {
					if (timeLTE(buses[bus][stop][i], cur_match[0])) {
						cur_match = [buses[bus][stop][i], bus, stop];
					}
				}
			}
		}
	}
	if (cur_match == null) {
		return "NOT FOUND";
	} else {
		return cur_match;
	}

}

// converts from military time to 12-hour-clock time
function convertTime(militarytime) {
	var ampm = militarytime.substring(militarytime.length-2, militarytime.length);
	if (ampm == 'AM') {
		return militarytime.substring(0, militarytime.length-2).trim();
	}
	if (ampm == 'PM') {
		var rtn = militarytime.substring(0, militarytime.length-2).trim();
		var i = militarytime.indexOf(':');
		var rtn = parseInt(militarytime.substring(0, i), 10)+12;
		if (rtn >= 24) {
			rtn = 12;
		}
		return rtn + militarytime.substring(i, militarytime.length-2).trim();
	}
}

// less than or equals
function timeLTE(t1, t2) {
	var t1i = t1.indexOf(':');
	var t2i = t2.indexOf(':');
	var h1 = parseInt(t1.substring(0, t1i), 10)
	var h2 = parseInt(t2.substring(0, t2i), 10)
	if (h1 < h2) {
		return true;
	} else if (h1 > h2) {
		return false;
	} else {
		var min1 = parseInt(t1.substring(t1i+1), 10);
		var min2 = parseInt(t2.substring(t2i+1), 10);
		return min1 <= min2;
	}
}

document.getElementById('bus-submit').onclick = function() {
	var d = new Date();
	if (d.getDay() == 0) {
		document.getElementById('result').innerHTML = '<b style=color:red>Cal Central and Perimeter Line buses are not available on Sundays.</b>';
	}
	if (d.getDay() == 6) {
		document.getElementById('result').innerHTML = '<b style=color:red>Cal Central and Perimeter Line buses are not available on Saturdays.</b>';
	}
	if (document.getElementsByName('bus-stop')[0].value == '--') {
		document.getElementById('result').innerHTML = '<b style=color:red>You must set the bus stop!</b>';
	} else {
		var bus_stop = document.getElementById('bus-stop').value;
		var time = document.getElementById('time-in').value;
		if (time.search(/^[0-9]{1,2}\:[0-9]{2}$/) == -1) {
			document.getElementById('result').innerHTML = '<b style=color:red>Invalid time! Please enter time in the form &lthh&gt:&ltmm&gt.</b>';
			return;
		} else {
			var i = time.indexOf(':');
			var h = parseInt(time.substring(0, i));
			var m = parseInt(time.substring(i+1));
			if (h < 24 && h >= 0 && m < 60 && m >= 0) {

			} else {
				if (m >= 60) {
					document.getElementById('result').innerHTML = '<b style=color:red>Invalid time! Minutes cannot be greater than 59.</b>';
				} else if (h >= 24) {
					document.getElementById('result').innerHTML = '<b style=color:red>Invalid time! Hours cannot be greater than 23.</b>';
				}
			}
		}
		var result = findBus(bus_stop, time);
		if (result == "NOT FOUND") {
			document.getElementById('result').innerHTML = '<b>There are no more available buses for today. Please try again tomorrow.</b>';
		} else {
			document.getElementById('result').innerHTML = 'The <b>' + result[1] + '</b> bus will arrive at <b>' + result[2] + '</b> at <b>' + result[0] + '</b>.';
			// Remember to bring your bus pass!
		}
	}
}

function update_time() {
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	x = function(unit) {
		if (((unit+"").length) == 1) {
			return '0' + unit;
		} else {
			return unit;
		}
	}
	h = x(h);
	m = x(m);
	document.getElementById('time-in').value = h + ":" + m;
}

update_time();





// * specify DATE in bus time
// * specify the need for ID if no bus pass specified
