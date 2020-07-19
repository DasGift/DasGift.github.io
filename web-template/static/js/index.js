function scrollEl() {
    window.addEventListener('scroll', function() {
        if(window.pageYOffset === 200) {
            alert(200)
        }
    })
}
scrollEl()