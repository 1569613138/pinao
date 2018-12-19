document.onkeydown = function (ev) {
    //1.需要知道点击的位置是否正确

    //2.点击的位置播放正确的声音
    switch (ev.keyCode) {
        case 65:	// a
        case 97:
        case 81:	// q
        case 113:
        case 90:	// z
        case 122:
            playSound(60);
            break;
        case 87:	// w
        case 119:
            playSound(61);
            break;
        case 83:	// s
        case 115:
        case 88:	// x
        case 120:
            playSound(62);
            break;
        case 69:	// e
        case 101:
            playSound(63);
            break;
        case 67:	// c
        case 99:
        case 68:	// d
        case 100:
            playSound(64);
            break;
        case 70:	// f
        case 102:
        case 82:	// r
        case 114:
        case 86:	// v
        case 118:
            playSound(65);
            break;
        case 84:	// t
        case 116:
            playSound(66);
            break;
        case 66:	// b
        case 98:
        case 71:	// g
        case 103:
            playSound(67);
            break;
        case 89:	// y
        case 121:
            playSound(68);
            break;
        case 72:	// h
        case 104:
        case 78:	// n
        case 110:
            playSound(69);
            break;
        case 85:	// u
        case 117:
            playSound(70);
            break;
        case 77:	// m
        case 109:
        case 74:	// j
        case 106:
            playSound(71);
            break;
        case 75:	// k
        case 107:
        case 73:	// i
        case 105:
        case 44:	// ,
        case 188:
            playSound(72);
            break;
        default:
            break;
    }
}
var divs = document.querySelectorAll('#main div');
for (let i = 0; i < divs.length; i++) {
    divs[i].onclick = function () {
        var index = this.getAttribute('id').replace('key', '') - 0;
        playSound(index);
    }

}
function playSound(index) {
    var audio = new Audio(sounds.mp3Sound[`sound${index}`]);
    audio.play();

    var div = document.querySelector(`#key${index}`);
    div.style.backgroundColor = '#9cf';

    setTimeout(function () {
        if (index == 60 || index == 62 || index == 64 || index == 65 || index == 67 || index == 69 || index == 71 || index == 72) {
            div.style.backgroundColor = '#eee';
        } else {
            div.style.backgroundColor = '#666';
        }
    }, 100);
}