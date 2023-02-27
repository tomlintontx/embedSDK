
const { SisenseFrame, enums } = window['sisense.embed'];

const ele = document.getElementById('sisenseFrame');
const wEle = document.getElementById('widgetFrame');

const sisenseFrame = new SisenseFrame({
    url: 'https://tams.sisensepoc.com',
    dashboard: '63c02028d54e7100352b0e8d',
    settings: {
        showLeftPane: true,
        showToolbar: true,
        showRightPane: false,
    },
    element: ele,
    editMode: true
});

sisenseFrame.render().then(() => {
  console.log("Sisense iFrame ready!");
});

function createWidget() {

    wEle.style.display = 'block'

}