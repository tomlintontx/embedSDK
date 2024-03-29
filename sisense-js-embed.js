

let config = {
    app: null,
    settings: {
        baseURL: "https://tams.sisensepoc.com"
    },
    dashboard: null,
    filters: {}
};

//connect to sisense on loading of this JS file

(async () => {

    /** @type {HTMLLinkElement} */
    let ele = document.getElementById('sisense-preload')

    let tag = document.createElement('script');

    tag.src = ele.href

    tag.onload = async () => {
        try {
            let app = await Sisense.connect(config.settings.baseURL);
            loadWidget(app);
        } catch (err){
            console.log(err);
        }
    }

    document.head.append(tag)

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

