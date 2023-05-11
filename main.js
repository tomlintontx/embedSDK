
const { SisenseFrame, enums } = window['sisense.embed'];

const ele = document.getElementById('sisenseFrame');
let h = document.getElementById('header');

let frameSettings =  {
    showLeftPane: false,
    showToolbar: true,
    showHeader: false,
    showRightPane: true,
}

const sisenseFrame = new SisenseFrame({
    url: '<https://tams.sisensepoc.com>',
    dashboard: '63c02028d54e7100352b0e8d',
    settings: frameSettings,
    element: ele,
    editMode: true
});

sisenseFrame.render().then(() => {
    console.log("Sisense iFrame ready!");


    // just logging all the dashboard and widget events so you can see when they are fired
    Object.keys(enums.WidgetEventType).forEach((key) => {
        sisenseFrame.widget.on(enums.WidgetEventType[key], (s, e) => console.log(s,e))
    });

    Object.keys(enums.DashboardEventType).forEach((key) => {
        sisenseFrame.dashboard.on(enums.DashboardEventType[key], (s, e) => console.log(s,e))
    });
});


function createWidget() {

    sisenseFrame.dashboard.createWidget();

}

// on widget being unloaded, resize the iframe to smaller screen
sisenseFrame.widget.on(enums.WidgetEventType.UNLOADED, () => {
    frameSettings.showLeftPane = false
    sisenseFrame.updateSettings(frameSettings)
    h.innerHTML = 'Dashboard Context'
    let frame = document.getElementsByTagName('iframe');
    frame[0].style.height = '450px'
})

// resize the iframe to be full screen when widget loaded
sisenseFrame.widget.on(enums.WidgetEventType.LOADED, () => {
    frameSettings.showLeftPane = true
    sisenseFrame.updateSettings(frameSettings)
    h.innerHTML = 'Widget Context'
    let frame = document.getElementsByTagName('iframe');
    frame[0].style.height = '100vh'
})