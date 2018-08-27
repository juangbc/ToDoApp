centralDisplay.addEventListener("touchstart", startTouch, false);
centralDisplay.addEventListener("touchmove", moveTouch, false);

var categoryIndex = [0];

// Swipe Up / Down / Left / Right
var initialX = null;

function startTouch(e) {
    initialX = e.touches[0].clientX;
}

function moveTouch(e) {
    if (initialX === null) {
        return;
    }

    var currentX = e.touches[0].clientX;

    var diffX = initialX - currentX;

    if (diffX > 0) {
        if (categoryIndex[0] > 0) {
            categoryIndex[0]--;
        }
        chooseWhichCategoryToDisplay(categoryIndex[0]);
    } else {
        if (categoryIndex[0] > 0) {
            categoryIndex[0]++;
        }
        chooseWhichCategoryToDisplay(categoryIndex[0]);
        }
    }

initialX = null;
  //  e.preventDefault();



