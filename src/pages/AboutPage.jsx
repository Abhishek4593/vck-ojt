import Header from "../components/Header/Header";

const AboutPage = () => {
    return(
        <div>
            <Header/>
            <h1>Our Academic Programs</h1>
            <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
            <h2>Discover Campus Life</h2>

            <h2>Undergraduate Programs (UG)</h2>
            <ul>
                <li><strong>Bachelor of Science (B.Sc.)</strong></li>
                    <ul>
                    <li>Computer Science (3 years)</li>
                    <li>Information Technology (3 years)</li>
                    <li>Biotechnology (3 years)</li>
                    </ul>
            </ul>

            <ul>
                <li><strong>Bachelor of Commerce (B.Com)</strong></li>
                <ul>
                    <li>Accounting & Finance (3 years)</li>
                    <li>Banking & Insurance (3 years)</li>   
                </ul>
            </ul>

            <ul>
                <li><strong>Bachelor of Arts (B.A.)</strong></li>
                <ul>
                    <li>English Literature (3 years)</li>
                    <li>Psychology (3 years)</li>
                </ul>
            </ul>

            <h2>Postgraduate Programs (PG)</h2>
            <ul>
                <li><strong>Master of Science (M.Sc.)</strong></li>
                <ul>
                    <li>Computer Science (2 years)</li>
                    <li>Information Technology (2 years)</li>
                </ul>
            </ul>

            <ul>
                <li><strong>Master of Commerce (M.Com) (2 years)</strong></li>
                <li><strong>Master of Arts (M.A.) (2 years)</strong></li>
            </ul>

            <h2>Program Details & Fee Structure (Annual)</h2>
            <table border="4px" >
                <thead>
                    <tr>
				       <th scope="col"> Program Type</th>
				       <th scope="col">Course Name</th>
                       <th scope="col"> Duration</th>
				       <th scope="col">Annual Fee (INR)</th>
                       <th scope="col">Eligibility</th>
			        </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>UG</td>
                        <td>B.Sc. Computer Science</td>
                        <td>3 Years</td>
                        <td>₹ 85,000</td>
                        <td>10+2 with PCM (50%)</td>
                     </tr>

                     <tr>
                        <td>UG</td>
                        <td>B.Com. Accounting & Finance</td>
                        <td>3 Years</td>
                        <td>₹ 70,000</td>
                        <td>10+2 Commerce (45%)</td>

                     </tr>

                     <tr>
                        <td>PG</td>
                        <td>M.Sc. Information Technology</td>
                        <td>2 Years</td>
                        <td>₹ 95,000</td>
                        <td>B.Sc. IT/CS (50%)</td>
                     </tr>
                </tbody>
            </table>

            <h2>Specialized & Vocational Courses</h2>
            <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>

            <p>Have questions about a specific course?</p>
            <input type="button" value="Inquire About Courses" />



        </div>
    )
}

export default AboutPage;