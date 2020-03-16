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
 'name': 'Testing the share options of faculty timetable'
}

driver = webdriver.Remote(
    command_executor='http://ankushpathak1:Jq6bxrXhNCEsyTWgwEvq@hub.browserstack.com:80/wd/hub',
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

time.sleep(5)
subbut = driver.find_elements_by_xpath('//span[@class="Navbut"]')
subbut[1].click()

time.sleep(6)
subb = driver.find_elements_by_xpath("//a[@href]")[0]
subb.click()

time.sleep(4)

driver.get('http://akashsuper2000.github.io/faculty-dashboard')

time.sleep(5)
subbut = driver.find_elements_by_xpath('//span[@class="Navbut"]')
subbut[1].click()

time.sleep(6)
subb = driver.find_elements_by_xpath("//a[@href]")[1]
subb.click()

time.sleep(4)
driver.get('http://akashsuper2000.github.io/faculty-dashboard')

time.sleep(5)
subbut = driver.find_elements_by_xpath('//span[@class="Navbut"]')
subbut[1].click()

time.sleep(6)
subb = driver.find_elements_by_xpath("//a[@href]")[2]
subb.click()


print('Test Case Passed')
driver.quit()


