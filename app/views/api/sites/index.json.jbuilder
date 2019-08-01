 @sites.each do |site| 
    json.set! site.id do
        json.partial! 'api/sites/site', site: site
    end
end