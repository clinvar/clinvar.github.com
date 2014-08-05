
'use strict';


var cntScoreBar = dc.barChart("#cnt-score");
var pp2ScoreBar = dc.barChart("#pp2-score");
var espScoreBar = dc.barChart("#esp-score");
var cg69ScoreBar = dc.barChart("#cg69-score");
var snp137ScoreBar = dc.barChart("#snp137-score");
var cosmicScoreBar = dc.barChart("#cosmic-score");
var nci60ScoreBar = dc.barChart("#nci60-score");
var pcgpScoreBar = dc.barChart("#pcgp-score");
var siftScoreBar = dc.barChart("#sift-score");
var g1000ScoreBar = dc.barChart("#g1000-score");



d3.json("data.json", function(data) {

								var snps = crossfilter(data);
								var all = snps.groupAll();
								var barChartWidth=400;
								var barChartHeight=145;
								var pieChartWidth=256;
								var pieChartHeight=pieChartWidth;
								var pieChartRadius=120;
								var pieChartInnerRadius=45;
								var gapSize = 1;

								var chrCols=['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c',
								'#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94',
								'#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5',
								'#e6550d', '#fd8d3c', '#fdae6b', '#fdd0a2', '#31a354', '#74c476'];
								var chrScale=d3.scale.ordinal().
								domain(["chr1","chr2",
												"chr3","chr4","chr5","chr6","chr7","chr8","chr9","chr10","chr11",
												"chr12","chr13","chr14","chr15","chr16","chr17","chr18","chr19","chr20","chr21","chr22","chrX","chrY"]).
								rangePoints([1,25]);
								var revChrScale=d3.scale.ordinal().domain([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25])
												.range(["chr1","chr2",
																				"chr3","chr4","chr5","chr6","chr7","chr8","chr9","chr10","chr11",
																				"chr12","chr13","chr14","chr15","chr16","chr17","chr18","chr19","chr20","chr21","chr22","chrX","chrY"]);


								var g1000format=d3.format(".2f");
						
								var cntScore = snps.dimension(function(d){
																//console.log(d.cg69);
																return d.VariantCnt;
																});
								var cntScoreGroup = cntScore.group();

								cntScoreBar.width(barChartWidth)
												.height(barChartHeight)
												.margins({top: 10, right: 50, bottom: 30, left: 40})
												.dimension(cntScore)
												.group(cntScoreGroup)
												.xAxisLabel("Percentage of variants related to the gene")
												.elasticX(false)
												.centerBar(false)
												.filter([400, 1200])
												.gap(gapSize)
												.round(dc.round.floor)
												.x(d3.scale.linear().domain([0, 1500]))
												.renderHorizontalGridLines(true);
												
													var pp2Score = snps.dimension(function(d){
																//console.log(d.cg69);
																return d.pp2;
																});
								var pp2ScoreGroup = pp2Score.group();

								pp2ScoreBar.width(barChartWidth)
												.height(barChartHeight)
												.margins({top: 10, right: 50, bottom: 30, left: 40})
												.dimension(pp2Score)
												.group(pp2ScoreGroup)
												.elasticY(true)
												.elasticX(false)
												.xAxisLabel("Percentage of Variants Covered")
												.centerBar(false)
												.gap(gapSize)
												.round(dc.round.floor)
												.x(d3.scale.linear().domain([0, 100]))
												.renderHorizontalGridLines(true);
												
													var esp6500_allScore = snps.dimension(function(d){
																//console.log(d.cg69);
																return d.esp6500_all;
																});
								var esp6500_allScoreGroup = esp6500_allScore.group();

								espScoreBar.width(barChartWidth)
												.height(barChartHeight)
												.margins({top: 10, right: 50, bottom: 30, left: 40})
												.dimension(esp6500_allScore)
												.group(esp6500_allScoreGroup)
												.elasticY(true)
												.elasticX(false)
												.centerBar(false)
												.xAxisLabel("Percentage of Variants Covered")
												.gap(gapSize)
												.round(dc.round.floor)
												.x(d3.scale.linear().domain([0, 100]))
												.renderHorizontalGridLines(true);
												var g1000Score = snps.dimension(function(d){
																//console.log(d.cg69);
																return d.g1000;
																});
								var g1000ScoreGroup = g1000Score.group();

								g1000ScoreBar.width(barChartWidth)
												.height(barChartHeight)
												.margins({top: 10, right: 50, bottom: 30, left: 40})
												.dimension(g1000Score)
												.group(g1000ScoreGroup)
												.elasticY(true)
												.elasticX(false)
												.centerBar(false)
												.gap(gapSize)
												.xAxisLabel("Percentage of Variants Covered")
												.round(dc.round.floor)
												.x(d3.scale.linear().domain([0, 100]))
												.renderHorizontalGridLines(true);
												
													var cg69Score = snps.dimension(function(d){
																//console.log(d.cg69);
																return d.cg69;
																});
								var cg69ScoreGroup = cg69Score.group();

								cg69ScoreBar.width(barChartWidth)
												.height(barChartHeight)
												.margins({top: 10, right: 50, bottom: 30, left: 40})
												.dimension(cg69Score)
												.xAxisLabel("Percentage of Variants Covered")
												.group(cg69ScoreGroup)
												.elasticY(true)
												.elasticX(false)
												.centerBar(false)
												.gap(gapSize)
												.round(dc.round.floor)
												.x(d3.scale.linear().domain([0, 100]))
												.renderHorizontalGridLines(true);
												
													var snp137Score = snps.dimension(function(d){
																//console.log(d.cg69);
																return d.snp137;
																});
								var snp137ScoreGroup = snp137Score.group();

								snp137ScoreBar.width(barChartWidth)
												.height(barChartHeight)
												.margins({top: 10, right: 50, bottom: 30, left: 40})
												.xAxisLabel("Percentage of Variants Covered")
												.dimension(snp137Score)
												.group(snp137ScoreGroup)
												.elasticY(true)
												.elasticX(false)
												.centerBar(false)
												.gap(gapSize)
												.round(dc.round.floor)
												.x(d3.scale.linear().domain([0, 100]))
												.renderHorizontalGridLines(true);
												
													var cosmicScore = snps.dimension(function(d){
																//console.log(d.cg69);
																return d.cosmic66_ucsc_xin;
																});
								var cosmicScoreGroup = cosmicScore.group();

								cosmicScoreBar.width(barChartWidth)
												.height(barChartHeight)
												.margins({top: 10, right: 50, bottom: 30, left: 40})
												.dimension(cosmicScore)
												.xAxisLabel("Percentage of Variants Covered")
												.group(cosmicScoreGroup)
												.elasticY(true)
												.elasticX(false)
												.centerBar(false)
												.gap(gapSize)
												.round(dc.round.floor)
												.x(d3.scale.linear().domain([0, 100]))
												.renderHorizontalGridLines(true);
												
													var siftScore = snps.dimension(function(d){
																//console.log(d.cg69);
																return d.SIFT;
																});
								var siftScoreGroup = siftScore.group();

								siftScoreBar.width(barChartWidth)
												.height(barChartHeight)
												.margins({top: 10, right: 50, bottom: 30, left: 40})
												.dimension(siftScore)
												.group(siftScoreGroup)
												.elasticY(true)
												.elasticX(false)
												.centerBar(false)
												.xAxisLabel("Percentage of Variants Covered")
												.gap(gapSize)
												.round(dc.round.floor)
												.x(d3.scale.linear().domain([0, 100]))
												.renderHorizontalGridLines(true);
												
													var pcgpScore = snps.dimension(function(d){
																//console.log(d.cg69);
																return d.pcgp_xin_Jan_2014;
																});
								var pcgpScoreGroup = pcgpScore.group();

								pcgpScoreBar.width(barChartWidth)
												.height(barChartHeight)
												.margins({top: 10, right: 50, bottom: 30, left: 40})
												.dimension(pcgpScore)
												.group(pcgpScoreGroup)
												.elasticY(true)
												.elasticX(false)
												.centerBar(false)
												.xAxisLabel("Percentage of Variants Covered")
												.gap(gapSize)
												.round(dc.round.floor)
												.x(d3.scale.linear().domain([0, 100]))
												.renderHorizontalGridLines(true);
												
													var nci60Score = snps.dimension(function(d){
																//console.log(d.cg69);
																return d.nci60;
																});
								var nci60ScoreGroup = nci60Score.group();

								nci60ScoreBar.width(barChartWidth)
												.height(barChartHeight)
												.margins({top: 10, right: 50, bottom: 30, left: 40})
												.dimension(nci60Score)
												.group(nci60ScoreGroup)
												.elasticY(true)
												.elasticX(false)
												.centerBar(false)
												.gap(gapSize)
												.round(dc.round.floor)
												.x(d3.scale.linear().domain([0, 100]))
												.xAxisLabel("Percentage of Variants Covered")
												.renderHorizontalGridLines(true);
												
												 dc.dataCount(".dc-data-count")
        .dimension(snps)
        .group(all);
			var dataTableType = snps.dimension(function(d) {

                return d.Gene;
            });				
		
				dc.dataTable(".dc-data-table")
                    .dimension(dataTableType)
                    .group(function(d) {
                        return ""; // otherwise you see blue belts.
                    })
                    .size(10000)//todo: the size must >= the actual size, otherwise it will do random sampling.
                    .columns([
                function(d) {
                    return d.Gene;
                },
                  function(d) {
                    return d.VariantCnt;
                },
                function(d) {
                    return d.esp6500_all;
                },
                function(d) {
                    return d.pp2;
                },
                function(d) {
                    return d.g1000;
                },
                function(d) {
                    return d.pcgp_xin_Jan_2014;
                },
                function(d) {
                    return d.SIFT;
                },
                function(d) {
                    return d.nci60;
                },
                function(d) {
                    return d.cosmic66_ucsc_xin;
                },
                function(d) {
                    return d.cg69;
                },
                function(d) {
                    return d.snp137;
                }
            ])
                    .sortBy(function(d) {
                        return d.g1000;
                    })
                    .order(d3.ascending)        .renderlet(function (table) {
            table.selectAll(".dc-table-group").classed("info", true);
        });
												
												
							

								dc.renderAll();
								//dc.redrawAll();
});

d3.selectAll("#version").text(dc.version);

