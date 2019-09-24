const {createFlowTreeBuilder, createSVGRender} = window.js2flowchart;

const flowTreeBuilder = createFlowTreeBuilder(),
    svgRender = createSVGRender();

const flowTree = flowTreeBuilder.build(code);
const shapesTree = svgRender.buildShapesTree(flowTree);


document.getElementById('svgImage').innerHTML = shapesTree.print();
