import React from 'react';
import './write.css'
import { Link } from "react-router-dom";

function WriteForUs() {
    return <div>
        <p>Programming World is a rapidly growing programming blog for programming and web development resources. Our main goal is to provide informative and quality content for web professionals &#8211; developers, programmers, freelancers, students and site owners. </p>
        <p>We are always welcome passionate technical writers to join our team. They must have the ability to produce high-quality content that readers can use in their project and fulfill their web development needs. </p>
        <p>We pay the industry standard rate to our writers for their quality work.</p>
        <br></br>
        <h3 className='quetion'>Want to upload a post for programmers ?</h3>
        <br></br>
        <div className="one">
            <Link to="/upload"><button className="curve">Upload</button></Link>
        </div>
        <br></br>
        <br></br>
        <h2>WHAT TYPE OF CONTENT DO WE PUBLISH?</h2>
        <p>We publish the articles and tutorials on the following categories.</p>
        <ul className="bullet_disk_list">
            <li>Web Development</li>
            <li>Web Programming</li>
            <li>Web Design</li>
            <li>PHP &#038; MySQL</li>
            <li>Frameworks (CodeIgniter, CakePHP, Laravel, etc.)</li>
            <li>CMS (Drupal, WordPress etc.)</li>
            <li>Magento</li>
            <li>Ajax</li>
            <li>jQuery</li>
            <li>JavaScript</li>
            <li>AngularJS</li>
            <li>HTML &#038; CSS</li>
        </ul>
        <p>Also, you can suggest the articles on upcoming technologies which are not falling into the above categories.</p>
    </div>;
}

export default WriteForUs;
