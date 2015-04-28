<?php

// automate 'last modified' feature by matching page for first 'Last date modified: MONTH DAY, YEAR.'
// $page: code of page to be modified
// @return returns the updated page
function update_last_modified($page) {
	$date = date('F j, Y');
	if ($page = preg_replace('/Last date modified: .+ [1-3]?[0-9], [0-9]{4}/', 'Last date modified: '.$date, $page)) {
		return $page;
	} else {
		return $page;
	}
}

?>
