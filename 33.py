from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
import time

desired_cap = {
 'browser': 'Chrome',
 'browser_version': '81.0 beta',
 'os': 'Windows',
 'build': 'UI Testing',
 'os_version': '10',
 'resolution': '1920x1080',
 'name': 'Testing if the accept and decline function works'
}

driver = webdriver.Remote(
    command_executor='http://ankushpathak1:Jq6bxrXhNCEsyTWgwEvq@hub.browserstack.com:80/wd/hub',
    desired_capabilities=desired_cap)

driver.get('http://akashsuper2000.github.io/faculty-dashboard')
driver.get('http://akashsuper2000.github.io/faculty-dashboard')
driver.fullscreen_window()
time.sleep(2)

username = driver.find_element_by_name('id')
username.send_keys('cb.en.cse001')

password = driver.find_element_by_name('password')
password.send_keys('latap123')
time.sleep(2) 
subbut = driver.find_element_by_xpath("//input[@type='submit']")
subbut.click()

time.sleep(3)
subbut = driver.find_elements_by_xpath('//span[@class="Navbut"]')
subbut[4].click()

time.sleep(3)
subb = driver.find_element_by_xpath('//a[@class="navbarLinks"]')
subb.click()

time.sleep(3)
driver.find_element_by_xpath('//a[@class="navbarLinks"]').click()
time.sleep(2)
subbut = driver.find_elements_by_xpath('//button[@name="approve"]')
subbut[0].click()

obj=driver.switch_to.alert
print("Alert Message: "+obj.text)
obj.accept()

time.sleep(2)
driver.quit()

print('Test case Passed')
