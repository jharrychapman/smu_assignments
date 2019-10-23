SELECT
	e.emp_no,
	e.last_name,
	e.first_name,
	e.gender,
	s.salary
FROM
	employees as e
LEFT JOIN salaries as s
	on e.emp_no = s.emp_no
ORDER BY
	e.last_name ASC;