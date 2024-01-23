const declineButton= document.getElementById("decline")
const acceptButton= document.getElementById("accept")
// save display of cookies in a variable
const cookieNotice = document.getElementById("cookie-notice")

acceptButton.addEventListener("click" , () => 
{
    console.log(`Accepted`)
})

acceptButton.addEventListener(`click` ,() =>
{
    console.log('Declined')
} )

//add cookie when user accepts, and hide the notice
acceptButton.addEventListener("click" , () =>
{
    cookieNotice.style.display = "none"
    document.cookie = "cookiesAccepted = true"
})

// add cookie notice for when user declines
declineButton.addEventListener("click" , () => 
{
    cookieNotice.style.display = "none"
    document.cookie = "cookiesAccepted = false"
})

//read the cookies when the page loads and do not display notice if stated
const cookiesAccepted = document.cookie.includes("cookiesAccepted")
if(cookiesAccepted)
{
    cookieNotice.style.display = "none"
}