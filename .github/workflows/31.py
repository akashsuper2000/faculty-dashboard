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
 'name': 'Testing the leave application form'
}

driver = webdriver.Remote(
    command_executor='http://ankushpathak1:Jq6bxrXhNCEsyTWgwEvq@hub.browserstack.com:80/wd/hub',
    desired_capabilities=desired_cap)

driver.get('http://akashsuper2000.github.io/faculty-dashboard')
driver.get('http://akashsuper2000.github.io/faculty-dashboard')
driver.fullscreen_window()
time.sleep(4)

username = driver.find_element_by_name('id')
username.send_keys('sample')

password = driver.find_element_by_name('password')
password.send_keys('password')
time.sleep(2) 
subbut = driver.find_element_by_xpath("//input[@type='submit']")
subbut.click()

time.sleep(4)
subbut = driver.find_elements_by_xpath('//span[@class="Navbut"]')
subbut[4].click()

time.sleep(3)
driver.find_element_by_xpath('//a[@class="navbarLinks"]').click()
time.sleep(2)
driver.find_element_by_xpath('//input[@value="Privilege Leave"]').click()
time.sleep(1)
driver.find_element_by_xpath('//input[@placeholder="From"]').send_keys("February 26, 2020")
time.sleep(1)
driver.find_element_by_xpath('//input[@placeholder="To"]').send_keys("March 4, 2020")
time.sleep(1)
driver.find_element_by_xpath('//textarea[@id="reason"]').send_keys("I want to go for a vacation")
time.sleep(1)
driver.find_element_by_xpath('//button[@class="btn btn-dark"]').click()
# for i in subbut:
#     time.sleep(2)
#     i.click()
time.sleep(4)
obj=driver.switch_to.alert
print("Confirmation Alert: "+obj.text)
obj.accept()

print('Test Case Passed')
driver.quit()
