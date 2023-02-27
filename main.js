
const { SisenseFrame, enums } = window['sisense.embed'];

const ele = document.getElementById('sisenseFrame');
const wEle = document.getElementById('widgetFrame');

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
});



function createWidget() {

    const widgetFrame = new SisenseFrame({
        url: 'https://tams.sisensepoc.com',
        dashboard: '63c02028d54e7100352b0e8d',
        settings: {
            showToolbar: true,
        },
        element: wEle,
        editMode: true
    });
    
    widgetFrame.render(null, true).then(() => {
      wEle.src = 'https://tams.sisensepoc.com/app/main/dashboards/63c02028d54e7100352b0e8d/widgets/new?datasource=New%20Jira&type=chart%2Fline';
    });

    sisenseFrame.hide()

    widgetFrame.show()

}