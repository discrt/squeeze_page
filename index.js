import './styles/style.scss'

const validateForm = () => {
    const input = document.forms["TCBoard_squeeze_page"][email].value;
    if(input == "") {
        alert("Please enter a valid email");
        return false;
    }
}


