

let inpField_el= document.getElementById('filter-jobs') 

let find_btn= document.querySelector('.find-resume-btn')
find_btn.addEventListener('click',Search_main());

async function searchDB(searchTxt, Jobs){ 
    let searched_Job= []
    for (let job of Jobs){
        let tmpJob= await searchJob(job,searchTxt) 
        console.log('job found is:',tmpJob);
        if (tmpJob){
            searched_Job.push(tmpJob)
        }        
    }
    if (searched_Job){
        return searched_Job;
    }else{
        return;
    }
}
async function searchJob(job,searchTxt){
    // logic for searching job
    if ((job.AppliedFor.toLowerCase().includes(searchTxt))||(job.skills.name.toLowerCase().includes(searchTxt))){
        console.log('searchJob: found this=> ',job);
        return job;
    }else{
        return;
    }
}
async function Search_main(){
    if (inpField_el.value){
        let all_jobs= await fetchData()
        let filtered_jobs= await searchDB(inpField_el.value, all_jobs)
        showJobs(filtered_jobs);
    }
}