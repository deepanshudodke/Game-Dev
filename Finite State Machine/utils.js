export function drawStatusText(context, input) {
    context.font = '30px Helvatica';
    context.fillText('LastInput: ' + input.lastKey, 10, 30);
}