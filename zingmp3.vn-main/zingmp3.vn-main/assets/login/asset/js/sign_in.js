let btnf1 = document.getElementById('switch-btn1');
let btnf2 = document.getElementById('switch-btn2');
let login_form = document.getElementById('login-form');
let reg_form = document.getElementById('reg-form');
let btnLogout = document.getElementById('btnLogout');
let btnLogin = document.getElementById('btnLogin');

btnf1.onclick = function() {
    login_form.style.display = 'none';
    reg_form.style.display = 'block';
}

btnLogin.onclick = function() {
    let usernameL = document.getElementById('usernameL');
    let passwordL = document.getElementById('passwordL');
    
    if (usernameL.value.trim() && passwordL.value.trim()) {
        let fl = true;
        for (let User of arrUser) {
            if (User.username === usernameL.value.trim() && User.password === passwordL.value.trim()) {
                fl = false;
                sessionStorage.setItem('currentUser', JSON.stringify(User));
                alert('Đăng nhập thành công');
                btnLogout.style.display = 'block';
                // Chuyển hướng đến trang chu
                window.open.href = 'index.html';
                break;
            }
        }
        if (fl) {
            alert('Sai tên đăng nhập hoặc sai mật khẩu');
        }
    } else {
        alert('Hãy nhập tên đăng nhập và mật khẩu');
    }
}
