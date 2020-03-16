from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
import time

desired_cap = {
 'browser': 'Chrome',
 'browser_version': '81.0 beta',
 'os': 'Windows',
 'os_version': '10',
 'resolution': '1920x1080',
 'name': 'Testing Button without Selecting the File'
}

driver = webdriver.Remote(
    command_executor='http://himanshukumar14:WnsNz7SsYbyT291rkPJr@hub.browserstack.com:80/wd/hub',
    desired_capabilities=desired_cap)

driver.get('http://akashsuper2000.github.io/faculty-dashboard')
driver.get('http://akashsuper2000.github.io/faculty-dashboard')
driver.fullscreen_window()
time.sleep(2)

username = driver.find_element_by_name('id')
username.send_keys('sample')

password = driver.find_element_by_name('password')
password.send_keys('password')
time.sleep(2) 
subbut = driver.find_element_by_xpath("//input[@type='submit']")
subbut.click()

time.sleep(3)
subbut = driver.find_elements_by_xpath('//span[@class="Navbut"]')
subbut[1].click()

time.sleep(3)
subb = driver.find_element_by_xpath('//input[@class="btn btn-primary"]')
subb.click()

time.sleep(3)
obj=driver.switch_to.alert
print("Alert Message: "+obj.text)
obj.accept()

time.sleep(2)

print('Test Case Finished')
driver.quit()