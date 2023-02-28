let problem = document.querySelector('.problem');
problem.innerHTML = "";
document.querySelectorAll('.nums').forEach(num => {
    num.addEventListener('click', () => {
        document.querySelector('.problem').innerHTML += num.innerHTML;

        if (num.innerHTML === "C") {
            problem.innerHTML = "";
        }

        if (num.innerHTML === "=") {
            console.log(problem.innerHTML);

            let equasion = problem.innerHTML.split("")

            let num1;

            switch (true){
                case equasion.includes("/"):
                    equasion.forEach(e => {
                    })
                    break;
            }


            problem.innerHTML = "";
        }

    })

})
document.querySelectorAll('.operator').forEach(op => {
    op.addEventListener('click', () => {
        if (problem.innerHTML !== "") {
            document.querySelector('.problem').innerHTML += op.innerHTML;
        }
    })
})