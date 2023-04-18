window.onload = function() {
    const testWrapper = document.getElementsByClassName('testWrapper')[0];
    testWrapper.addEventListener('click', () => {
        console.log('testWrapper');
    });
}