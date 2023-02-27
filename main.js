
const { SisenseFrame, enums } = window['sisense.embed'];

const ele = document.getElementById('sisenseFrame');
const wEle = document.getElementById('widgetFrame');

const sisenseFrame = new SisenseFrame({
    url: 'https://tams.sisensepoc.com',
    dashboard: '63c02028d54e7100352b0e8d',
    settings: {
        showLeftPane: true,
        showToolbar: false,
        showRightPane: false,
    },
    element: ele,
    editMode: true
});

sisenseFrame.render().then(() => {
  console.log("Sisense iFrame ready!");
});

const widgetFrame = new SisenseFrame({
    url: 'https://tams.sisensepoc.com',
    dashboard: '63c02028d54e7100352b0e8d',
    settings: {
        showToolbar: true,
    },
    element: wEle,
    editMode: true
});

widgetFrame.render().then(() => {
  console.log("Sisense iFrame ready!");
});


function createWidget() {

    widgetFrame.dashboard.createWidget()


}