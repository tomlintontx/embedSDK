
const { SisenseFrame, enums } = window['sisense.embed'];

const ele = document.getElementById('sisenseFrame');

const sisenseFrame = new SisenseFrame({
    url: 'http://54.173.244.240:30845',
    dashboard: '63c02028d54e7100352b0e8d',
    settings: {
        showLeftPane: false,
        showToolbar: false,
        showRightPane: false,
    },
    element: ele
});

sisenseFrame.render().then(() => {
  console.log("Sisense iFrame ready!");
});

