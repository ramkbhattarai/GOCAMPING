json.site do
  json.partial! 'api/sites/site', site: @site  
end

json.host do 
     json.partial! 'api/users/user', user: @site.host
end