// Write your scripts here to run (JavaScript executed on server)
var gr = new GlideRecord("incident");
gr.addActiveQuery();
gr.setLimit(5);
gr.query();
while (gr.next()) {
	gs.info(gr.number);
}
