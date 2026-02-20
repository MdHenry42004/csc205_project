<template>
    <div>
        <header>
            <img src="@/assets/images/genevalogo.webp" alt="Geneva College Logo">
            <nav>
                <RouterLink to="/dashboard">Dashboard</RouterLink>
                <RouterLink to="/studentInfo">Student Info</RouterLink>
                <RouterLink to="/studentList">Student List</RouterLink>
                <RouterLink to="/profile">Profile</RouterLink>
            </nav>
        </header>

        <h1>Student Selection</h1>

        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Major</th>
                <th>Minor</th>
                <th>Degree</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Student 1</td>
                <td>Computer Science</td>
                <td>Data Analyst</td>
                <td>Bachelors</td>
                <td>Sophmore</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
                <td>Student 2</td>
                <td>Computer Science</td>
                <td>Cyber Security</td>
                <td>Bachelors</td>
                <td>Junior</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
                <td>Student 3</td>
                <td>Cyber Security</td>
                <td>Criminal Justice</td>
                <td>Bachelors</td>
                <td>Senior</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
                <td>Student 4</td>
                <td>Computer Science</td>
                <td>N/A</td>
                <td>Associates</td>
                <td>Freshman</td>
            </tr>
            </tbody>
        </table>

        <footer>Geneva College</footer>
    </div>
</template>

<script>

</script>