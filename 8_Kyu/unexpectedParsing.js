/*Here is a piece of code:

function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");
  return 
  {
    status: msg
  }
}*/


function getStatus(isBusy) {
  return { status : isBusy ? "busy" : "available" }
}
