export function temporarySwapHalf(array)
{
    var newArray = array.map(e=>e);
    var left = null;
    var right = null;
    var length = newArray.length;
    for (left = 0; left < length / 2; left += 1)
    {
        right = length - 1 - left;
        var temporary = newArray[left];
        newArray[left] = newArray[right];
        newArray[right] = temporary;
    }
    return newArray;
}
