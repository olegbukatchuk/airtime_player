/* 
 * Full customize stream player for Airtime RMS
 * Version: 0.0.2
 * Author: Oleg Bukatchuk
 * E-mail% oleg@bukatchuk.com
*/

// Initialize address for this thread..
var streamUrl = 'http://localhost:8000/live320';

// Check for thread.
checkStream (streamUrl);

// If thread not availible display a message in player.
function checkStream () {
    while (streamU = '') {
        document.write('Stream not avalible!');
    }
}
