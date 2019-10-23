-- Harry Chapman SQL Homework
-- This file examines employee data

-- Query 1
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

-- Query 2
SELECT
	emp_no,
	first_name,
	last_name,
	gender,
	hire_date
FROM
	employees
WHERE
	EXTRACT(YEAR FROM hire_date) = 1986
ORDER BY
	last_name ASC;

-- Query 3
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

-- Query 4
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
		e.emp_no = de.emp_no
JOIN
	departments as d
	ON 	
		de.dept_no = d.dept_no
ORDER BY
	e.last_name ASC;

-- Query 5
SELECT
	emp_no,
	last_name,
	first_name,
	gender
FROM
	employees
WHERE
	first_name = 'Hercules'
	AND
		last_name LIKE 'B%'
ORDER BY
	last_name;

-- Query 6
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
ORDER BY
	e.last_name;

-- Query 7
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

-- Query 8
SELECT
	last_name,
	COUNT(emp_no) AS LASTNAMECOUNT
FROM
	employees
GROUP BY
	last_name
ORDER BY
	LASTNAMECOUNT DESC;