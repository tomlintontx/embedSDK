
const { SisenseFrame, enums } = window['sisense.embed'];

const ele = document.getElementById('sisenseFrame');
const wEle = document.getElementById('widgetFrame');
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

    sisenseFrame.dashboard.createWidget();



    h.innerHTML = 'Widget Context'

}

sisenseFrame.widget.on(enums.WidgetEventType.UNLOADED, () => h.innerHTML = 'Dashboard Context')