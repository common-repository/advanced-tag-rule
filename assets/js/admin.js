/**
 * @author Anton Shulga
 * Description: front area javascript
 */
jQuery.noConflict();

(function($){
    $(function () {
       
        // Add new rule
        $('#attr_add_new_rule').on('click', function(){
            if( $('form.tag_hidden_rule:visible').length ){
                $('form.tag_hidden_rule').hide();
            }else{
                $('form.tag_hidden_rule').show();
            }            
        });
        
        
    });
    
})(jQuery);
