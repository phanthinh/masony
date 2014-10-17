var test = angular.module('MyModule', [
	'masonry'
]);

test.controller('MyController', function($scope, $http,$location,$rootScope,$timeout) {
	
	$scope.items = [
		{
			"id": 0,
			"picture": "http://media-cache-ec0.pinimg.com/736x/11/5d/10/115d10aef02b7a6753477dd15b26a223.jpg",
			"age": 31,
			"name": "Mathews Goff"
		},
		{
			"id": 1,
			"picture": "http://media-cache-ec0.pinimg.com/736x/f5/79/26/f57926358418feb15d86df5af62075b5.jpg",
			"age": 36,
			"name": "Collins Alston"
		},
		{
			"id": 2,
			"picture": "http://media-cache-ak0.pinimg.com/736x/08/4d/b2/084db22f740f564795332f9775f9ab44.jpg",
			"age": 27,
			"name": "Jasmine Rollins"
		},
		{
			"id": 3,
			"picture": "http://media-cache-cd0.pinimg.com/736x/6a/a1/85/6aa18537c9f7ec9a4b2b01f04f309889.jpg",
			"age": 32,
			"name": "Julie Jefferson"
		},
		{
			"id": 4,
			"picture": "http://media-cache-ec0.pinimg.com/736x/42/f5/cf/42f5cf205615283b580af4f00479b0d9.jpg",
			"age": 23,
			"name": "Wilder King"
		},
		{
			"id": 5,
			"picture": "http://media-cache-ak0.pinimg.com/736x/2c/9f/c9/2c9fc93136c15fabd5ae1c7cbdffeed3.jpg",
			"age": 23,
			"name": "Stanley Moore"
		},
		{
			"id": 6,
			"picture": "http://media-cache-ak0.pinimg.com/736x/1a/f5/cd/1af5cd4adadbea3cf2237dab4f6d04b3.jpg",
			"age": 36,
			"name": "Reynolds Bishop"
		},
		{
			"id": 7,
			"picture": "http://media-cache-ak0.pinimg.com/736x/6b/e5/5a/6be55a937e8e1b40b4c8bea51f01f03c.jpg",
			"age": 26,
			"name": "Bryant Flowers"
		},
		{
			"id": 8,
			"picture": "http://media-cache-ec0.pinimg.com/736x/fa/14/cd/fa14cde3f3495714740476e592e738a7.jpg",
			"age": 38,
			"name": "Jenifer Martinez"
		},
		{
			"id": 9,
			"picture": "http://media-cache-cd0.pinimg.com/736x/90/ac/36/90ac3670abc14db06159e9aed5c4b925.jpg",
			"age": 40,
			"name": "Mcguire Pittman PittmanPittman Pittman Pittman"
		},
		{
			"id": 10,
			"picture": "http://media-cache-ec0.pinimg.com/736x/37/29/a0/3729a086cbfe59593dda4aac182e8669.jpg",
			"age": 34,
			"name": "Valdez Hyde"
		},
		{
			"id": 11,
			"picture": "http://media-cache-ec0.pinimg.com/736x/21/11/39/211139af4cec5bba18fcc5c8bb0dba06.jpg",
			"age": 34,
			"name": "Marla Mayo"
		},
		{
			"id": 12,
			"picture": "http://media-cache-ak0.pinimg.com/736x/91/41/20/914120d435a3d0f96418867c74e1f8c5.jpg",
			"age": 30,
			"name": "Brown Ortega"
		},
		{
			"id": 13,
			"picture": "http://media-cache-ec0.pinimg.com/736x/9c/98/41/9c9841a6740f46e8cd5e48a35a95744d.jpg",
			"age": 32,
			"name": "Jeannette William"
		},
		{
			"id": 14,
			"picture": "http://media-cache-cd0.pinimg.com/736x/f8/e5/1d/f8e51d80057c6b0c7654db5ba4f72a29.jpg",
			"age": 30,
			"name": "Bridges Ashley"
		},
		{
			"id": 15,
			"picture": "http://media-cache-ec0.pinimg.com/736x/a2/78/df/a278dffdce265de71b976bdb67b71aa3.jpg",
			"age": 33,
			"name": "Latasha Hewitt"
		},
		{
			"id": 16,
			"picture": "http://media-cache-ak0.pinimg.com/736x/c7/1d/46/c71d468bf8bb432c31ce44cc18535cdf.jpg",
			"age": 35,
			"name": "Alma Sawyer"
		},
		{
			"id": 17,
			"picture": "http://media-cache-cd0.pinimg.com/736x/22/ea/13/22ea13c69b9cc1b773194770ff100b6b.jpg",
			"age": 21,
			"name": "Liz Mcbride"
		},
		{
			"id": 18,
			"picture": "http://media-cache-ec0.pinimg.com/736x/37/ca/da/37cada0578f901b4385e1a7bd6b23f02.jpg",
			"age": 26,
			"name": "Mcintosh Chandler"
		},
		{
			"id": 19,
			"picture": "http://media-cache-ec0.pinimg.com/736x/16/6c/af/166caf54254c62915a429cefc4ad56b4.jpg",
			"age": 20,
			"name": "Alford Hartman"
		},
		{
			"id": 20,
			"picture": "http://media-cache-ec0.pinimg.com/736x/0a/c0/81/0ac081ce7c77c0dfd4e1153a2c28aaa5.jpg",
			"age": 29,
			"name": "Tiffany Green"
		},
		{
			"id": 21,
			"picture": "http://media-cache-ec0.pinimg.com/736x/5a/c2/d3/5ac2d326003f6b28b6b737dacc54e75d.jpg",
			"age": 38,
			"name": "Stafford Riggs"
		},
		{
			"id": 22,
			"picture": "http://media-cache-ak0.pinimg.com/736x/8c/0a/c8/8c0ac87d0c69fa538d5edcab919a0e21.jpg",
			"age": 40,
			"name": "Elinor Chambers"
		},
		{
			"id": 23,
			"picture": "http://media-cache-ec0.pinimg.com/236x/88/de/6b/88de6ba9ae79f0230136b97c582af451.jpg",
			"age": 27,
			"name": "Carly Howard"
		},
		{
			"id": 24,
			"picture": "http://media-cache-ec0.pinimg.com/736x/0f/7e/c4/0f7ec46ecb53e469b1e0cedb79ffae1e.jpg",
			"age": 27,
			"name": "Rosalind Sanchez"
		},
		{
			"id": 25,
			"picture": "http://media-cache-ec0.pinimg.com/736x/4a/f2/64/4af264f4e78ea2b6fed14c950c16d85c.jpg",
			"age": 28,
			"name": "Jaclyn Shelton"
		},
		{
			"id": 26,
			"picture": "http://media-cache-ak0.pinimg.com/736x/2f/29/79/2f297938ef940305cb8d395c18c7e7f3.jpg",
			"age": 25,
			"name": "Hughes Phelps"
		},
		{
			"id": 27,
			"picture": "http://media-cache-ak0.pinimg.com/736x/b2/b8/4f/b2b84fd9ec741bef65f918cc5f9a9ef9.jpg",
			"age": 36,
			"name": "Rosetta Barrett"
		},
		{
			"id": 28,
			"picture": "http://media-cache-ak0.pinimg.com/736x/ad/6c/db/ad6cdb5643fe0c633c5917022aad86d1.jpg",
			"age": 29,
			"name": "Jarvis Wong"
		},
		{
			"id": 29,
			"picture": "http://media-cache-ak0.pinimg.com/736x/df/54/93/df5493850eb469d7a9805a5a2c659ae2.jpg",
			"age": 23,
			"name": "Kerri Pennington"
		},
		{
			"id": 30,
			"picture": "http://media-cache-cd0.pinimg.com/736x/98/82/cc/9882ccc54a35a3f12edc5fa2659cedd4.jpg",
			"age": 23,
			"name": "Kerri Pennington"
		},
		{
			"id": 31,
			"picture": "http://media-cache-ak0.pinimg.com/736x/88/f9/d9/88f9d974fb97198827f0c3e7b6ac931f.jpg",
			"age": 23,
			"name": "Kerri Pennington"
		},
		{
			"id": 32,
			"picture": "http://media-cache-ec0.pinimg.com/736x/52/52/b6/5252b6c34ef2c7022ba4c6024d81cd51.jpg",
			"age": 23,
			"name": "Kerri Pennington"
		},
		{
			"id": 33,
			"picture": "http://media-cache-ak0.pinimg.com/736x/d6/86/83/d686839c4e255966dbbb2e6485870464.jpg",
			"age": 23,
			"name": "Kerri Pennington"
		},
		{
			"id": 34,
			"picture": "http://media-cache-ec0.pinimg.com/736x/58/05/17/58051745b6d1d46ac63070e427e7bd29.jpg",
			"age": 23,
			"name": "Kerri Pennington"
		},
		{
			"id": 35,
			"picture": "http://media-cache-ak0.pinimg.com/736x/25/b1/19/25b11993accf7927d5a14b96ac5936fc.jpg",
			"age": 23,
			"name": "Kerri Pennington"
		},
		{
			"id": 36,
			"picture": "http://media-cache-ec0.pinimg.com/736x/21/6e/db/216edb2f64c9150f065a60c5132f3c0e.jpg",
			"age": 23,
			"name": "Kerri Pennington"
		},
		{
			"id": 37,
			"picture": "http://media-cache-ak0.pinimg.com/736x/47/91/36/47913634fb2bba6711baa9d22f855849.jpg",
			"age": 23,
			"name": "Kerri Pennington"
		},
		{
			"id": 38,
			"picture": "http://media-cache-ec0.pinimg.com/236x/ce/d3/c6/ced3c6da1dc814e1da3f3516b571feab.jpg",
			"age": 23,
			"name": "Kerri Pennington"
		},
		{
			"id": 39,
			"picture": "http://media-cache-ec0.pinimg.com/236x/69/a3/d5/69a3d5a11f6cd13aa0f0eed8acd468bb.jpg",
			"age": 23,
			"name": "Kerri Pennington"
		},
		{
			"id": 40,
			"picture": "http://media-cache-ak0.pinimg.com/736x/4c/39/96/4c399684d1906c7d140f638df10692c6.jpg",
			"age": 23,
			"name": "Kerri Pennington"
		},
		{
			"id": 41,
			"picture": "http://media-cache-ec0.pinimg.com/736x/f3/63/ec/f363ec58a36df3e238892c6f8bb0e749.jpg",
			"age": 23,
			"name": "Kerri Pennington"
		},
		{
			"id": 42,
			"picture": "http://media-cache-ec0.pinimg.com/236x/f5/bd/aa/f5bdaa59c10543cf6396bf11a461bdb9.jpg",
			"age": 23,
			"name": "Kerri Pennington"
		},
		{
			"id": 43,
			"picture": "http://media-cache-ec0.pinimg.com/736x/6c/51/31/6c5131f45b90db6ee637500d98ee0e7f.jpg",
			"age": 23,
			"name": "Kerri Pennington"
		},
		{
			"id": 44,
			"picture": "http://media-cache-ec0.pinimg.com/236x/80/ac/ca/80accaba1c00d39902d88c0b93e9aa82.jpg",
			"age": 23,
			"name": "Kerri Pennington"
		},
		{
			"id": 45,
			"picture": "http://media-cache-ak0.pinimg.com/736x/21/f3/1b/21f31b9b1678104612c04b9fcef0f6fd.jpg",
			"age": 23,
			"name": "Kerri Pennington"
		},
		{
			"id": 46,
			"picture": "http://media-cache-ak0.pinimg.com/736x/63/1d/43/631d43feb33a5b93040e391d7e9b05ea.jpg",
			"age": 23,
			"name": "Kerri Pennington"
		},
		{
			"id": 47,
			"picture": "http://media-cache-ak0.pinimg.com/736x/71/47/e5/7147e5c95b3b99044ad467b8a1cdcbe5.jpg",
			"age": 23,
			"name": "Kerri Pennington"
		},
		{
			"id": 48,
			"picture": "http://media-cache-ak0.pinimg.com/236x/12/c5/91/12c591d19a31af78417e44a2a63bddb8.jpg",
			"age": 23,
			"name": "Kerri Pennington"
		},
		{
			"id": 49,
			"picture": "http://media-cache-ec0.pinimg.com/236x/01/e6/b8/01e6b870dcd0517c444c8b297162fe96.jpg",
			"age": 23,
			"name": "Kerri Pennington"
		},
		{
			"id": 50,
			"picture": "http://media-cache-ec0.pinimg.com/236x/1f/bb/4d/1fbb4da1e2e2c81fa58d929a0568b608.jpg",
			"age": 23,
			"name": "Kerri Pennington"
		}
	];
	
	$scope.busy = false;
	$scope.numlimit = 3;
	
	
	$scope.loadMore = function(){
		if(!$scope.busy) {
			$scope.busy = true;
			$timeout(function(){
				$scope.numlimit = $scope.numlimit +3; 
				$scope.busy = false;
			},1000)
		}
	}
	
});



test.directive('infiniteScroll', function($rootScope, $window, $timeout) {
	return {
		link: function(scope, elem, attrs) {
			var checkWhenEnabled, handler, scrollDistance, scrollEnabled;
			$window = angular.element($window);
			scrollDistance = 0;
			if (attrs.infiniteScrollDistance != null) {
				scope.$watch(attrs.infiniteScrollDistance, function(value) {
					return scrollDistance = parseInt(value, 10);
				});
			}
			scrollEnabled = true;
			checkWhenEnabled = false;
			if (attrs.infiniteScrollDisabled != null) {
				scope.$watch(attrs.infiniteScrollDisabled, function(value) {
					scrollEnabled = !value;
					if (scrollEnabled && checkWhenEnabled) {
						checkWhenEnabled = false;
						return handler();
					}
				});
			}
			handler = function() {
				var elementBottom, remaining, shouldScroll, windowBottom;
				windowBottom = $window.height() + $window.scrollTop();
				elementBottom = elem.offset().top + elem.height();
				remaining = elementBottom - windowBottom;
				shouldScroll = remaining <= $window.height() * scrollDistance;
				shouldScroll = false;
				if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
					shouldScroll = true;
				}

				if (shouldScroll && scrollEnabled) {
					if ($rootScope.$$phase) {
						return scope.$eval(attrs.infiniteScroll);
					} else {
						return scope.$apply(attrs.infiniteScroll);
					}
				} else if (shouldScroll) {
					return checkWhenEnabled = true;
				}
			};
			$window.on('scroll', handler);
			scope.$on('$destroy', function() {
				return $window.off('scroll', handler);
			});
			return $timeout((function() {
				if (attrs.infiniteScrollImmediateCheck) {
					if (scope.$eval(attrs.infiniteScrollImmediateCheck)) {
						return handler();
					}
				} else {
					return handler();
				}
			}), 2000);
		}
	};
});
