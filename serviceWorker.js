navigator &&
    navigator.serviceWorker &&
    navigator.serviceWorker.register("serviceWorker.js")
        .catch((error) => {

            error && console.log("errorMessage at serviceWorkerRegister");
            error && console.log(error);

        }).then((response) => {

            response && console.log("ResponseMessage at serviceWorkerRegister");
            response && console.log(response);

        });
const cacheName = ("PWAClass24102022");
function serviceWorkerInstall(e) {
    if (e) {

        console.log("serviceWorkerInstall event!");
        console.log(e);

    };
};
function serviceWorkerActivate(e) {
    if (e) {

        console.log("serviceWorkerActivate event!");
        console.log(e);

    };
};
function serviceWorkerFetch(e) {
    if (e) {

        console.log("serviceWorkerFetch event!");
        console.log(e);
        console.log(e.request);
        console.log(e.request.url);

    };
};
self.addEventListener("install", serviceWorkerInstall);
self.addEventListener("activate", serviceWorkerActivate);
self.addEventListener("fetch", serviceWorkerFetch);