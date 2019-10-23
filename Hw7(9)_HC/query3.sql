SELECT
	e.emp_no,
	e.last_name,
	e.first_name,
	dm.dept_no,
	d.dept_name,
	dm.from_date,
	dm.to_date
FROM
	employees AS e
JOIN
	dept_manager AS dm
	ON
		e.emp_no = dm.emp_no
JOIN
	departments as d
	ON 	
		dm.dept_no = d.dept_no
ORDER BY
	e.last_name ASC;