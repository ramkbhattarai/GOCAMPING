json.site do
  json.partial! 'api/sites/site', site: @site  
end

json.host do 
     json.partial! 'api/users/user', user: @site.host
end

@site.photos.each do |photo|

  json.photos do 
     json.set! photo.id do 
      json.extract! photo, :id, :site_id, :url
     end
  end
end


