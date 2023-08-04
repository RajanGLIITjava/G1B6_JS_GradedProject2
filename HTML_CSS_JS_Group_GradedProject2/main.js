
// i have signed up user rajan password raj123 (index.html)
//if this user login fail, pls signup and then use login.html
function signup(e){
    event.preventDefault();

    var email=document.getElementById('email').value;
    var username=document.getElementById('username').value;
    var pass=document.getElementById('password').value;

    var user ={
        email: email,
        username: username,
        password: pass,
    };

    var json=JSON.stringify(user);
    localStorage.setItem(username,json);
    console.log('user added')
}


// this function will  use the login id,(login.html)
function loginFunc(e){
    event.preventDefault();
    var username=document.getElementById('username').value;
    var pass=document.getElementById('password').value;
    var result=document.getElementById('result');

    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data)

    if(user==null)
    {
        result.innerHTML='wrong username';
    }
    else if(username==data.username && pass==data.password)
    {
        result.innerHTML='logged in ';
        result.innerHTML=`<a href="./resume.html" alt="">Resume Templates</a>`;
    }
    else{
        result.innerHTML='logged in failed..Invalid Password';
    }
}


// this  will display the resume screen.
document.onload=showJobs()
    async function fetchJobs()
    {
        let data= await fetch("http://127.0.0.1:5500/data.json")
        let jobs= data.json()
        return jobs;
    }

    function displayJobs(jobs)
    {
        let jobTiles=document.querySelector('.job-tiles')
        let innrHtml=``
        jobs.map(function(job){
        let jobHtml=`
                <div class="card" id="resume-list">
                    <div class="job-basics">
                        <h2> Personal Information</h2>
                        ${job.basics.name}<br>
                        ${job.basics.AppliedFor}<br>
                        ${job.basics.email}<br>
                        ${job.basics.phone}<br>
                        ${job.basics.location.address}<br>
                        ${job.basics.location.postalCode}<br>
                        ${job.basics.location.city}<br>
                        ${job.basics.location.state}<br>
                        ${job.basics.profiles.network}<br>
                        ${job.basics.profiles.url}<br>
                    </div>
                    <br>

                    <div class="job-skill">
                        <h2>Technical Skills</h2>
                        ${job.skills.name}<br>
                        ${job.skills.level}<br>
                        ${job.skills.keywords}<br>
                    </div>
                    <br>

                    <div class="job-work">
                        <h2> Work Experience in Previous Company</h2>
                        <b>Comapny Name</b>:${job.work.CompanyName}<br>
                        <b>Position</b>:${job.work.Position}<br>
                        <b>Starting Date</b>:${job.work.StartDate}<br>
                        <b>Ending Date</b>:${job.work.EndDate}<br>
                        <b>Summery</b>:${job.work.Summary}<br>
                    </div>
                    <br>
                    
                    <div class="job-internship">
                    <h2> Internship</h2>
                    <b>Comapny Name</b>:${job.Internship.CompanyName}<br>
                    <b>Position</b>:${job.Internship.Position}<br>
                    <b>Starting Date</b>:${job.Internship.StartDate}<br>
                    <b>Ending Date</b>:${job.Internship.EndDate}<br>
                    <b>Summery</b>:${job.Internship.Summary}<br>
                    </div><br>

                    <div class="job-projects">
                    <h2> Internship</h2>
                    <b>Project Name</b>: ${job.projects.name}<br>
                    <b>Project Summery</b>:${job.projects.description}<br>
                    </div><br>

                    <div class="Education"><br>
                    <h2> Education</h2>
                    <h3> UG</h3>
                    <b>Institute Name</b>:${job.education.UG.institute}<br>
                    <b>Course Name</b>:${job.education.UG.course}<br>
                    <b>Course Starting Date</b>:${job.education.UG.StartDate}<br>
                    <b>Course Ending Date</b>:${job.education.UG.EndDate}<br>
                        <br>
                    </div>

                    

                    <div class="job-achievements">
                    <h2> Achievements</h2>
                        ${job.achievements.Summary}<br>
                    </div>
                    <br>

                    <div class="job-interests">
                    <h2> Hobbies</h2>
                    ${job.interests.hobbies}<br>
                    </div>
                    <br>

                </div>
        `
       // innrHtml =jobHtml
        innrHtml += jobHtml
    })
    jobTiles.innerHTML=innrHtml

    }
    async function showJobs()
        {
            //fetch all jobs
        let Jobs=await fetchJobs()
            //display on cards
            displayJobs(Jobs)
        }

