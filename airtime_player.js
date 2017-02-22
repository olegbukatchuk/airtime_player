/* 
 * Full customize stream player for Airtime RMS
 * Version: 0.0.2
 * Author: Oleg Bukatchuk
 * E-mail% oleg@bukatchuk.com
*/

var stream = 'http://localhost:8000/live320';

checkStream (stream);

function checkStream () {
    while (stream = '') {
        document.write('Stream not avalible!');
    }
}

