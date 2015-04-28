<html>
<body>
<pre>
<?php

// parses pasted bus schedule data into Javascript so it can be used in .js file. This is just a helper script that prepares data for writing the main application.

// parses central and perimeter bus schedules
//

$perimeter_data = file_get_contents('./schedules/perimeterline.txt');
$central_data = file_get_contents('./schedules/centralcampus.txt');

$perimeter_data = str_replace(PHP_EOL, ' ', $perimeter_data);
$central_data = str_replace(PHP_EOL, ' ', $central_data);

// matches schedule and returns it as an array; of course is not perfect
function extract_data($data) {
	preg_match_all('/(?:\s[A-Z]\s|\s*)(?P<location>[A-Z][\:\s@A-Za-z]{10,}?)[^0-9A-Za-z]{0,10}?(?P=location)?((?:\s*[0-9]{1,2}:[0-9]{2} (?:AM|PM))+)/', $data, $matches);

	// sanitizes location
	foreach ($matches[1] as &$item) {
		$item = trim($item);
		if ($item == '') {
			exit("Empty string");
		}
		if ($item[1] == ' ' && (1 == preg_match('/[A-Za-z]/', $item[0]))) {
			$item = trim(substr($item, 1));
		}
	}
	// sanitizes time
	foreach ($matches[2] as &$item) {
		$item = trim($item);
	}
	return $matches;

}

$perimeter_data = extract_data($perimeter_data);
$central_data = extract_data($perimeter_data);

$times_raw = $perimeter_data[2];
$times_array = array();

$i = 0;
foreach ($times_raw as $times) {
	$times_array[$i++] = explode('M', $times);
}
foreach ($times_array as &$times) {
	foreach ($times as &$time) {
		$time = trim($time) . 'M';
		if (strlen($time) < 5) {
			$time = 'INVALID';
		}
	}
}

$output = "";
$output .= "{";
	$i = 0;

var_dump($times_array);

foreach ($times_array as $times) {
	$output .= "{'': [";
	$j = 0;
	foreach ($times as $time) {
		$j++;
		echo $time . "<br>";

		if (0 == strcmp($time, 'INVALID')) {
		} else {
			$output .= "'".$time."'";
			if ($j < count ($times)) {
				$output .= ', ';
			}
		}
	}
	$i++;
	$output .= "]}";
	if ($i < count( $times_array)) {
		$output .= ', ';
	}
	$output .= "<br><br>";
}
$output .= "}";

var_dump($times_array);

echo preg_replace('/, ]/', ']', $output);

//var_dump($times_array);


/* // Used for unique location generation.
$bus_stops = array_unique (array_merge ($perimeter_data[1], $central_data[1]));
//var_dump($bus_stops);
foreach ($bus_stops as $stop) {
	echo strtr("<option value='". $stop. "'". ">" . $stop ."</option>", Array("<"=>"&lt;","&"=>"&amp;")) . "<br>";
}*/
?>

</pre>
</body>
</html>
