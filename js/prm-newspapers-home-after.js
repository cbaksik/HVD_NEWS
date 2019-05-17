/**
 * Created by cbaksik on 5/16/19.
 * This component used to add more content to Newspapers home page
 * 
 * prm-messages-and-blocks-after
 */

(function () {
    angular.module('viewCustom')
        .controller('prmNewspapersHomeAfterCtrl',[function() {
            var vm=this;        
            
        }]);

    angular.module('viewCustom')
        .component('prmNewspapersHomeAfter',{
            bindings:{parentCtrl:'<'},
            controller: 'prmNewspapersHomeAfterCtrl',
            templateUrl:'/primo-explore/custom/HVD_NEWS/html/prm-newspapers-home-after.html'
            //template: '<h2>TESTING</h2>'
        });

})();
