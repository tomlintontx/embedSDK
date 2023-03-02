
const { SisenseFrame, enums } = window['sisense.embed'];

const ele = document.getElementById('sisenseFrame');
let h = document.getElementById('header');

const sisenseFrame = new SisenseFrame({
    url: 'https://tams.sisensepoc.com',
    dashboard: '63c02028d54e7100352b0e8d',
    settings: {
        showLeftPane: true,
        showToolbar: true,
        showHeader: true,
        showRightPane: false,
    },
    element: ele,
    editMode: true
});

sisenseFrame.render().then(() => {
    console.log("Sisense iFrame ready!");

    Object.keys(enums.WidgetEventType).forEach((key) => {
        sisenseFrame.widget.on(enums.WidgetEventType[key], (s, e) => console.log(s,e))
    });

    Object.keys(enums.DashboardEventType).forEach((key) => {
        sisenseFrame.dashboard.on(enums.DashboardEventType[key], (s, e) => console.log(s,e))
    });
});


function createWidget() {

    window.frames[ele.id].location = 'https://tams.sisensepoc.com/app/main/dashboards/63c02028d54e7100352b0e8d/widgets/new?datasource=New%20Jira&type=chart%2Fline'

    // sisenseFrame.dashboard.createWidget();

}

sisenseFrame.widget.on(enums.WidgetEventType.UNLOADED, () => {
    h.innerHTML = 'Dashboard Context'
    let frame = document.getElementsByTagName('iframe');
    frame[0].style.height = '200px'
})

sisenseFrame.widget.on(enums.WidgetEventType.LOADED, () => {
    h.innerHTML = 'Widget Context'
    let frame = document.getElementsByTagName('iframe');
    frame[0].style.height = '100vh'
})