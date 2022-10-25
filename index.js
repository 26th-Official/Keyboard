let a = document.querySelectorAll(".wkeys")
let c = ["1c","1d","1e","1f","1g","2a","2b","2c","2d","2e","2f","2g","3a","3b","3c","3d","3e","3f","3g","4a","4b"]
for (let i=0;i<a.length;i++){
    a[i].addEventListener('click',function(){
        b = this.id
        let audio = new Audio("Sound\\"+b+".mp3")
        audio.play()
    })
}
