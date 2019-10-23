SELECT
	e.emp_no,
	e.last_name,
	e.first_name,
	d.dept_name
FROM
	employees AS e
JOIN 
	dept_emp AS de
	ON
		de.emp_no = e.emp_no
JOIN
	departments as d
	ON
		d.dept_no = de.dept_no
WHERE
	d.dept_name = 'Sales'
	OR
		d.dept_name = 'Development'
ORDER BY
	e.last_name;
