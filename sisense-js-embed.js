

let config = {
    app: null,
    settings: {
        baseURL: "https://tams.sisensepoc.com"
    },
    dashboard: null,
    filters: {}
}

//connect to sisense on loading of this JS file

(async () => {

    try {
        let sisense = await Sisense.connect(mySisenseApp.settings.server);
        loadWidget;
    } catch (err){
        console.log("Error: Failed connecting to the Sisense server");
    }

})();

let loadWidget = async (app) => {

    config.app = app;

    let dash = new Dashboard();

    app.dashboards.add(dash);

    let elements = document.querySelectorAll('[widget-id]');

    let promises = Array.from(elements).map(async (element) => {

        let widgetToLoad = element.getAttribute('widget-id');
        await dash.widgets.load(widgetToLoad);
        dash.widgets.get(widgetToLoad).container = element

    })

    await Promise.allSettled(promises)

    dash.refresh()

        

}
