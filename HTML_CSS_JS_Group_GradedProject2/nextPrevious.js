var listResume = document.querySelector('.job-container');

var i=1;


function clickPrevious() {
    if(i==1)
    {
        document.getElementsByClassName(
            'Previous-btn').disabled = true;
            document.getElementsByClassName(
                'slide-btn').disabled = false;
    } else 
    {
        i--;
        return setResume();
    }
}

function clickNext(){
    if (i == 6) 
    {
        document.getElementsByClassName(
            'slide-btn').disabled = true;
        document.getElementsByClassName(
                'Previous-btn').disabled = false;
    } else 
    {
       i++;    
        return setResume();
    }
}

function setResume(){
    console.log(listResume.innerHTML);
    //return listResume.innerHTML= i;
}
