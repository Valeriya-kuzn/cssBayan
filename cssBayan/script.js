+function() {

    document.querySelector('.block').classList.add('opened');

    document.querySelectorAll('.block').forEach(function(section) {
        section.addEventListener('click', function(e) {
            document.querySelectorAll('.block').forEach(function(section) {
                section.classList.remove('opened');
            })

            e.target.closest('.block').classList.add('opened');
        })
    })

}()

+function() {

    document.querySelectorAll('.block').forEach(function(section) {
        section.addEventListener('mousemove', function(e) {
            document.querySelectorAll('.block').forEach(function(section) {
                section.classList.remove('move-opened');
            })

            e.target.closest('.block').classList.add('move-opened');
        })
    })

}()

+function() {

    document.querySelectorAll('.content').forEach(function(section) {
        section.addEventListener('mousemove', function(e) {
            document.querySelectorAll('.content').forEach(function(section) {
                section.classList.remove('move-icon-opened');
            })            
            
            e.target.closest('.content').classList.add('move-icon-opened');
        })
    })

}()